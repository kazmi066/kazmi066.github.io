import { useEffect } from 'react';
import Timeline from '../../Elements/Timeline';
import Title from '../../Elements/Title';
import { useRef } from 'react';
import { fadeUpObserver } from '../../utils/animations';

export default function Timelines() {
    const career = [
        {
            date: '2022-04-01',
            dateString: 'April 2022 - Present',
            work: 'Stellar Minore',
            text: "Working as a frontend developer at Stellar Minore.",
            ref: useRef(null)
        },
        {
            date: '2021-09-01',
            dateString: 'September 2021 - January 2022',
            work: 'Mexil Software Solutions',
            text: "Really good experience at Mexil as Fullstack engineer. I Worked with several projects till deployment and maintained different workflows.",
            ref: useRef(null)
        },
        {
            date: '2021-08-01',
            dateString: 'August 2021 - September 2021',
            work: 'AlphaSquad',
            text: "Got offered an internship as a Fullstack Developer. I worked on company on-going projects based on AWS and NextJS. It was a breakthrough experience for me to learn industry level stuff.",
            ref: useRef(null)
        },
        {
            date: '2020-04-01',
            dateString: 'April 2020',
            work: 'Freelance',
            text: "Worked with different clients on React and Javascript based projects. Really helped me to learn new things, improve my skills and get a better understanding of the programming.",
            ref: useRef(null)
        },
    ]

    useEffect(() => {
        career.map((c) => {
            const observer = new IntersectionObserver(fadeUpObserver, {
                delay: 200
            });

            observer.observe(c.ref.current);

            return () => {
                observer.disconnect();
            };
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <article className="mt-12">
            <div className="pb-4">
                <Title title="Career" />
            </div>
            {
                career.map((item, index) => {
                    return (
                        <div key={index} ref={item.ref} className="opacity-0">
                            <Timeline date={item.date} dateString={item.dateString} work={item.work}>
                                <p className="text-white opacity-60">{item.text}</p>
                            </Timeline>
                        </div>
                    )
                })
            }
        </article>
    )
}
