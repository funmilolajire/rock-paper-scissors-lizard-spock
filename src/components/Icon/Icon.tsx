import { getIconMetadata } from './utils';

export const Icon = ({ iconName, onClick }: { iconName: string, onClick?: any }) => {
    const icon = getIconMetadata(iconName);
    return (
        <div onClick={onClick} data-icon-name={iconName} className={`Icon ${icon?.name}`} style={{ background: icon?.outerRingColor }}>
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