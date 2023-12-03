"use client";

import { useRouter } from "next/navigation";

export type LoginFormState = {
  loginId: string;
  loginPassword: string;
};

export const useLoginForm = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log("Success:", values);
    router.push("/", { replace: true });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return {
    onFinish,
    onFinishFailed,
  };
};
