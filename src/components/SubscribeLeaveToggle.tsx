"use client";

import { Button } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";
import axios, { AxiosError } from "axios";
import { useCustomToasts } from "@/hooks/use-custom-toasts";
import { toast } from "@/hooks/use-toast";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

interface SubscribeLeaveToggleProps {
  subredditId: string;
  subredditName: string;
  isSubscribed: boolean;
}

const SubscribeLeaveToggle = ({
  subredditId,
  subredditName,
  isSubscribed,
}: SubscribeLeaveToggleProps) => {
  const { loginToast } = useCustomToasts();
  const router = useRouter();

  const { mutate: subscribe, isLoading: isSubLoading } = useMutation({
    mutationFn: async () => {
      const playload: SubscribeToSubredditPayload = {
        subredditId,
      };

      const { data } = await axios.post("/api/subreddit/subscribe", playload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      return toast({
        title: "There was a problem.",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },

    onSuccess: () => {
      startTransition(() => {
        router.refresh();
      });

      toast({
        title: "Unsubscribed!",
        description: `You are now unsubscribed from/${subredditName}`,
      });
    },
  });

  const { mutate: unsubscribe, isLoading: isUnSubLoading } = useMutation({
    mutationFn: async () => {
      const playload: SubscribeToSubredditPayload = {
        subredditId,
      };

      const { data } = await axios.post("/api/subreddit/unsubscribe", playload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      return toast({
        title: "There was a problem.",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },

    onSuccess: () => {
      startTransition(() => {
        router.refresh();
      });

      toast({
        title: "Unsubscribed!",
        description: `You are now unsubscribed from/${subredditName}`,
      });
    },
  });

  return isSubscribed ? (
    <Button
      isLoading={isUnSubLoading}
      onClick={() => unsubscribe()}
      className="w-full mt-1 mb-4"
    >
      Leave community
    </Button>
  ) : (
    <Button
      isLoading={isSubLoading}
      onClick={() => subscribe()}
      className="w-full mt-1 mb-4"
    >
      Join to post
    </Button>
  );
};

export default SubscribeLeaveToggle;
