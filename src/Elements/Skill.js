export default function Skill({ image, title }) {
    return (
        <div className="flex flex-column items-center content-center py-4 px-2">
            <img src={image} alt="skill" />
            <h3>{title}</h3>
        </div>
    )
}
