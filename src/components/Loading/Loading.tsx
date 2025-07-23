import type { PropsWithChildren } from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  isLoading: boolean;
};

const Loading = ({ isLoading, children }: PropsWithChildren<Props>) => {
  if (isLoading) {
    return <Spinner />
  }
  return children;
};

export default Loading;
