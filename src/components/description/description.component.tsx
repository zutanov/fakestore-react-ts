import { useEffect, useState } from 'react';
import { SDescription, SDescriptionBtn, SDescriptionText } from './description';

interface DescriptionProps {
    text: string;
    maxLength?: number;
}

const defaultLength = 150;

const Description = ({ text, maxLength = defaultLength }: DescriptionProps) => {
    const [desc, setDesc] = useState(text);
    const [showBtn, setShowbtn] = useState(false);

    useEffect(() => {
        let length = desc.length;
        if (length > maxLength) {
            setDesc(`${desc.slice(0, 150)}...`);
            setShowbtn(true);
        }
    }, []);

    const showFullDesc = () => {
        setDesc(text);
        setShowbtn(false);
    };
    const showShortDesc = () => {
        setDesc(`${desc.slice(0, 150)}...`);
        setShowbtn(true);
    };

    return (
        <SDescription>
            <SDescriptionText>{desc}</SDescriptionText>
            {desc.length > maxLength ? (
                <>
                    <SDescriptionBtn onClick={showFullDesc} style={{ display: showBtn ? 'block' : 'none' }}>
                        Show Details
                    </SDescriptionBtn>
                    <SDescriptionBtn onClick={showShortDesc} style={{ display: showBtn ? 'none' : 'block' }}>
                        Hide Details
                    </SDescriptionBtn>
                </>
            ) : null}
        </SDescription>
    );
};

export default Description;
