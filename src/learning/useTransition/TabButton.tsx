import { useTransition } from "react";

export default function TabButton({
  action,
  children,
  isActive,
}: {
  action: () => void;
  children: React.ReactNode;
  isActive: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>;
  }
  if (isPending) {
    return <b className="opacity-50">{children}</b>;
  }
  return (
    <button
      onClick={async () => {
        startTransition(async () => {
          // await the action that's passed in.
          // This allows it to be either sync or async.
          await action();
        });
      }}
    >
      {children}
    </button>
  );
}
