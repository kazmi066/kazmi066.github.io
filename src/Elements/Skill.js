export default function Skill({ image, title, color }) {
    return (
        <div className="mx-6">
            <svg className={`hover:fill-${color}-500`}>{image}</svg>
            <h3>{title}</h3>
        </div>
    )
}
