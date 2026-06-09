"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { InstallStep } from "@/lib/releases";
import { triggerFileDownload } from "@/components/smile/download-button";
import {
  BrowserBleedLayer,
  InstallPreviewStage,
  InstallStepBleedOverlay,
} from "@/components/smile/install-previews";

type InstallStepContextValue = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  stepCount: number;
  reducedMotion: boolean;
  sequenceKey: number;
  tryAgain: () => void;
};

const InstallStepContext = createContext<InstallStepContextValue | null>(null);

function useInstallStep() {
  const context = useContext(InstallStepContext);
  if (!context) {
    throw new Error("Install step components must be used within InstallStepShowcase");
  }
  return context;
}

type InstallStepShowcaseProps = {
  steps: InstallStep[];
  version: string;
  downloadUrl: string | null;
  fileName: string;
  children: ReactNode;
};

export function InstallStepShowcase({
  steps,
  version,
  downloadUrl,
  fileName,
  children,
}: InstallStepShowcaseProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [sequenceKey, setSequenceKey] = useState(0);
  const stepCount = steps.length;

  const goToStep = useCallback((step: number) => {
    setActiveStep(Math.max(0, Math.min(stepCount - 1, step)));
  }, [stepCount]);

  const advanceToInstall = useCallback(() => {
    setActiveStep(1);
  }, []);

  const advanceToLaunch = useCallback(() => {
    setActiveStep(2);
  }, []);

  const tryAgain = useCallback(() => {
    setActiveStep(0);
    setSequenceKey((key) => key + 1);
    if (downloadUrl) {
      triggerFileDownload(downloadUrl, fileName);
    }
  }, [downloadUrl, fileName]);

  return (
    <InstallStepContext.Provider
      value={{
        activeStep,
        setActiveStep: goToStep,
        stepCount,
        reducedMotion: false,
        sequenceKey,
        tryAgain,
      }}
    >
      <BrowserBleedLayer
        key={`browser-bleed-${sequenceKey}`}
        version={version}
        activeStep={activeStep}
        onAdvanceToInstall={activeStep === 0 ? advanceToInstall : undefined}
      />
      <InstallStepBleedOverlay
        key={`step-overlay-${sequenceKey}`}
        activeStep={activeStep}
        onAdvanceToLaunch={activeStep === 1 ? advanceToLaunch : undefined}
      />
      {children}
    </InstallStepContext.Provider>
  );
}

export function InstallStepList({ steps }: { steps: InstallStep[] }) {
  const { activeStep, setActiveStep } = useInstallStep();

  return (
    <ol className="mt-10 space-y-4">
      {steps.map((step, index) => {
        const isActive = index === activeStep;

        return (
          <li key={step.title}>
            <button
              type="button"
              onClick={() => setActiveStep(index)}
              className={`flex w-full gap-4 rounded-xl px-2 py-2 text-left transition-all duration-500 ${
                isActive ? "bg-white/6" : "hover:bg-white/3"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-all duration-500 ${
                  isActive
                    ? "border-rose-400/40 bg-rose-400/15 text-rose-200"
                    : "border-white/12 bg-white/6 text-white/45"
                }`}
              >
                {index + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <p
                  className={`font-medium transition-colors duration-500 ${
                    isActive ? "text-white/95" : "text-white/55"
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`mt-1 text-sm leading-relaxed transition-all duration-500 ${
                    isActive
                      ? "max-h-24 opacity-100 text-white/48"
                      : "max-h-0 overflow-hidden opacity-0 text-white/0"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export function InstallTryAgain() {
  const { activeStep, stepCount, tryAgain } = useInstallStep();
  const isLastStep = activeStep === stepCount - 1;

  if (!isLastStep) return null;

  return (
    <button
      type="button"
      onClick={tryAgain}
      className="mt-6 w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-left text-sm text-white/55 transition-colors hover:border-white/16 hover:bg-white/6 hover:text-white/75"
    >
      Not working?{" "}
      <span className="font-medium text-white/85 underline decoration-white/25 underline-offset-2">
        Try again
      </span>
    </button>
  );
}

export function InstallPreviewPanel({ version }: { version: string }) {
  const { activeStep, setActiveStep, sequenceKey } = useInstallStep();

  return (
    <section className="relative flex items-start justify-center overflow-visible bg-transparent px-6 py-12 md:px-10 lg:min-h-screen lg:overflow-visible lg:px-8 lg:pt-14 lg:pb-0 xl:px-10">
      <div className="relative mx-auto flex w-full max-w-none flex-col items-center justify-center overflow-visible lg:items-start">
        <p className="mb-8 w-full text-center text-xs uppercase tracking-widest text-muted-foreground lg:text-left">
          What to expect on your Mac
        </p>
        <InstallPreviewStage
          key={`preview-stage-${sequenceKey}`}
          activeStep={activeStep}
          version={version}
          onAdvanceToInstall={
            activeStep === 0 ? () => setActiveStep(1) : undefined
          }
          onAdvanceToLaunch={
            activeStep === 1 ? () => setActiveStep(2) : undefined
          }
        />
      </div>
    </section>
  );
}
