import { getIconMetadata } from './utils';

export const Icon = ({ iconName }: { iconName: string }) => {
    const icon = getIconMetadata(iconName);
    return (
        <div className={`Icon ${icon?.name}`} style={{ background: icon?.outerRingColor }}>
            <div className="Icon--OuterRing" style={{ background: icon?.bgColor }}>
                <div className="Icon--InnerRing">
                    <div className="Icon--InnerInnerRing">
                        <img src={icon?.svg} alt={icon?.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}