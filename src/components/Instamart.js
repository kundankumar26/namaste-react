import { useState } from "react";

const Section = ({title, description, visible, setVisible}) => {
    return (
        <div className="p-2">
            <div className="text-xl my-2">{title}</div>
            <button className="underline" onClick={() => {setVisible(title)}}>
                {visible == title ? 'Hide' : 'Show'}
            </button>
            {visible === title && <div className="py-2">{description}</div>}
        </div>
    )
};

const Instamart = () => {
    const [visible, setVisible] = useState('About');
    return (
        <>
            <div className="text-4xl mx-2 my-3">Instamart</div>
            <Section 
                title={'About'}
                description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain '}
                visible={visible}
                setVisible={(e) => setVisible(e)}
            />
            <Section 
                title={'Team'}
                description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain '}
                visible={visible}
                setVisible={(e) => setVisible(e)}
            />
            <Section 
                title={'Careers'}
                description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain '}
                visible={visible}
                setVisible={(e) => setVisible(e)}
            />
        </>
    );
};

export default Instamart;