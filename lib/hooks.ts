import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName) {
    const mobileThreshold = 0.3;
    const desktopThreshold = 0.5;
    const threshold =
        typeof window !== "undefined" && window.innerWidth < 768
            ? mobileThreshold
            : desktopThreshold;
    const { ref, inView } = useInView({ threshold });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        const oneSecond = 1000;
        const shouldUpdateSection = inView && Date.now() - timeOfLastClick > oneSecond;

        if (shouldUpdateSection) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return { ref };
}
