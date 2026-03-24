import "./styles/Loading.css";
declare const Loading: ({ percent }: {
    percent: number;
}) => import("react/jsx-runtime").JSX.Element;
export default Loading;
export declare const setProgress: (setLoading: (value: number) => void) => {
    loaded: () => Promise<number>;
    percent: number;
    clear: () => void;
};
//# sourceMappingURL=Loading.d.ts.map