export const fadeUpObserver = (entries, observer) => {
    entries.forEach((entry) => {
        const { delay } = observer;
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.animationTimingFunction = "ease-in";
                entry.target.classList.add("animate-fade-up-in");
            }, delay);
        }
    });
};

export const fadeRightObserver = (entries, observer) => {
    entries.forEach((entry) => {
        const { delay } = observer;
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.animationTimingFunction = "ease-in";
                entry.target.classList.add("animate-fade-right");
            }, delay);
        }
    });
};
