import { PropsWithChildren } from "react";
interface LoadingType {
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
    setLoading: (percent: number) => void;
}
export declare const LoadingContext: import("react").Context<LoadingType | null>;
export declare const LoadingProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useLoading: () => LoadingType;
export {};
//# sourceMappingURL=LoadingProvider.d.ts.map