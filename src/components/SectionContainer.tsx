import React from "react"

type SectionProps = {
    backgroundImg?: string;
    upperTitle?: string;
    belowTitle?: string;
    description?: string;
    titleAlignment?: string;
    background?: string;
    height?: string;
    children?: React.ReactNode;
    textAlign?: string;
}


function SectionContainer({backgroundImg,background, upperTitle, belowTitle , description, titleAlignment, height, textAlign , children}:SectionProps){

    return(
        <section style ={{backgroundImage: `url(${backgroundImg})`}} className={`bg-cover ${(background == "primary")? "bg-[var(--primary-color)]": "bg-[var(--secondary-color)]"} ${(background == "primary")? "*:text-[var(--secondary-color)]" : "*:text-[var(--primary-color)]"}  w-full ${(height=="small")? "h-[50vh]": "h-full"} ${(height=="small")? "md:h-[70vh]": "h-full"} flex ${(titleAlignment == "left" )? "flex-row": "flex-col" } items-center p-10 justify-center gap-5`}>
            <div className="text-[var(--secondary-color)] flex flex-col items-center max-w-[50%]">
                <p className="md:text-4xl text-2xl">{upperTitle}</p>
                <p className="md:text-4xl text-2xl font-bold">{belowTitle}</p>
                <p className= {(textAlign=="left")? "text-left" : "text-center"}>{description}</p>
            </div>
            {children}
        </section>

    )
}



export default SectionContainer