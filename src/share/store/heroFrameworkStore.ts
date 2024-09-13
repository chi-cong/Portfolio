import { create } from "zustand";

type Frameworks =
  | "React"
  | "Angular"
  | "Nextjs"
  | "Flutter"
  | "Nodejs"
  | "Dotnet";

export const useHeroFrameworks = create<{
  selectedFramework: Frameworks;
  previousFramework: Frameworks | undefined;
  selectFramework: (framework: Frameworks) => void;
}>((set) => ({
  selectedFramework: "React",
  previousFramework: undefined,
  selectFramework: (framework) =>
    set((state) => ({
      previousFramework: state.selectedFramework,
      selectedFramework: framework,
    })),
}));
