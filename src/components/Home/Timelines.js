import Timeline from '../../Elements/Timeline';
import Title from '../../Elements/Title';
export default function Timelines() {
    const career = [
        {
            date: '2020-04-01',
            dateString: 'April 2020',
            work: 'Freelance',
            text: "Worked with different clients on React and Javascript based projects. Really helped me to learn new things, improve my skills and get a better understanding of the programming."
        },
        {
            date: '2020-08-01',
            dateString: 'August 2021 - September 2021',
            work: 'AlphaSquad',
            text: "Got offered an internship as a Fullstack Developer. I worked on company on-going projects based on AWS and NextJS. It was a breakthrough experience for me to learn industry level stuff."
        },
        {
            date: '2020-09-01',
            dateString: 'September 2021 - January 2022',
            work: 'Mexil Software Solutions',
            text: "Really good experience at Mexil as Fullstack engineer. I Worked with several projects till deployment and maintained different workflows."
        },
    ]

    return (
        <article className="mt-12">
            <div className="pb-4">
                <Title title="Career" />
            </div>
            {
                career.reverse().map((item, index) => {
                    return (
                        <Timeline key={index} date={item.date} dateString={item.dateString} work={item.work}>
                            <p className="w-11/12 text-gray-400">{item.text}</p>
                        </Timeline>
                    )
                })
            }
        </article>
    )
}
