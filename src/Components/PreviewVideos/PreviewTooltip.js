import { Tooltip } from 'react-tooltip';


const PreviewTooltipVide = ({ id, content }) => {
    return (
      <Tooltip id={id} effect="solid" html>
        {content}
      </Tooltip>
    );
};

export default PreviewTooltipVide