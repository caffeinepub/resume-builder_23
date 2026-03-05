import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
import type { Resume } from "../types/resume";
import { useActor } from "./useActor";

const SESSION_KEY = "resume-builder-session";

function getOrCreateSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function toBackendResume(resume: Resume) {
  return {
    ...resume,
    lastUpdated: BigInt(Date.now()),
  };
}

export function useResumeSession() {
  const sessionId = getOrCreateSessionId();
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const isFirstLoad = useRef(true);

  // Load resume from backend
  const { data: backendResume, isLoading } = useQuery<Resume | null>({
    queryKey: ["resume", sessionId],
    queryFn: async () => {
      if (!actor) return null;
      try {
        const result = await actor.getResume(sessionId);
        return result as Resume;
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
    retry: false,
  });

  // Create resume mutation
  const createMutation = useMutation({
    mutationFn: async (resume: Resume) => {
      if (!actor) return;
      await actor.createResume(sessionId, toBackendResume(resume));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resume", sessionId] });
    },
  });

  // Update resume mutation
  const updateMutation = useMutation({
    mutationFn: async (resume: Resume) => {
      if (!actor) return;
      await actor.updateResume(sessionId, toBackendResume(resume));
    },
    onSuccess: () => {
      toast.success("Resume saved", { duration: 1500 });
    },
    onError: () => {
      toast.error("Failed to save resume");
    },
  });

  const saveResume = useCallback(
    async (resume: Resume, isNew: boolean) => {
      if (!actor) return;
      if (isNew) {
        await createMutation.mutateAsync(resume);
      } else {
        await updateMutation.mutateAsync(resume);
      }
    },
    [actor, createMutation, updateMutation],
  );

  return {
    sessionId,
    backendResume,
    isLoading: isLoading || isFetching,
    saveResume,
    isFirstLoad,
    isSaving: createMutation.isPending || updateMutation.isPending,
  };
}
