import type { PropsWithChildren } from "react";

type Props = {
    isLoading: boolean;
    // children: React.ReactNode;
}

const Loading = ({ isLoading, children }: PropsWithChildren<Props>) => {
    if (isLoading) {
        return (
            <p className="text-xl text-center">Loading...</p>
        );
    }
    return children;
}

export default Loading;