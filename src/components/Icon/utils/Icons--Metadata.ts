import rock from '../icons/rock.svg';
import paper from '../icons/paper.svg';
import scissors from '../icons/scissors.svg';
import lizard from '../icons/lizard.svg';
import spock from '../icons/spock.svg';

//type declarations
interface IconMetadata {
    name: string,
    svg: string,
    outerRingColor: string,
    bgColor: string
}

type GetIconMetadata = (iconName: string) => IconMetadata | undefined;

//icons metadata
const iconsMetadata: IconMetadata[] = [
    {
        name: 'rock',
        svg: rock,
        outerRingColor: '#9D1634',
        bgColor: '#DB2E4D'
    },
    {
        name: 'paper',
        svg: paper,
        outerRingColor: '#2A45C2',
        bgColor: '#4664F4'
    },
    {
        name: 'scissors',
        svg: scissors,
        outerRingColor: '#C76C1B',
        bgColor: '#EB9F0E'
    },
    {
        name: 'lizard',
        svg: lizard,
        outerRingColor: '#5F37A8',
        bgColor: '#834EE3'
    },
    {
        name: 'spock',
        svg: spock,
        outerRingColor: '#2D8DAB',
        bgColor: '#3FB7CD'
    },
]

export const getIconMetadata: GetIconMetadata = (iconName) => {
    return iconsMetadata.find(icon => icon.name === iconName.toLowerCase());
}