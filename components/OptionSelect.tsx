import { CSSProperties, useState } from "react"
import { Header3, Header4, DefaultButtonText, SelectedButtonText } from './Typography';
import GradientButton from './GradientButton'
import Card from './Card'

type OptionSelectProps = {
    options: string[];
    style?: CSSProperties;
    type: string;
    onChange(index: number): void;
}

export default function OptionSelect({ options, type, style, onChange }: OptionSelectProps) {
    const [selected, setSelected] = useState(0);
    return <Card isTransparent={false} style={{ margin: '20% 20px 0 20px', padding: '25px 26px 31px 26px', ...style }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ marginBottom: '30px' }}>
                <Header3 text="Choose your" color='var(--purple-color)' /> <Header4 text={type} color='var(--purple-color)' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                {options && options.map((option) => {
                    const index = options.indexOf(option);
                    if (index === selected) {
                        return <GradientButton key={index}>
                            <SelectedButtonText text={option} />
                        </GradientButton>
                    } else {
                        return <DefaultButtonText onClick={() => { setSelected(index); onChange(index) }} key={index} text={option} style={{padding: '9px 20px'}}/>
                    }
                })}
            </div>
        </div>
    </Card>
}