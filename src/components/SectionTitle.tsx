
export interface Props {
    headingOne : string,
    headingTwo : string
}

const SectionTitle:React.FC<Props> = (heading) => {
    return (
        <div className="flex  flex-col gap-4 items-center mb-12">
            <h3 className="text-4xl">{heading.headingOne}</h3>
            <p className="text-base">{heading.headingTwo}</p>
        </div>
    );
};

export default SectionTitle;