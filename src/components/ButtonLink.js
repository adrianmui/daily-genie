import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
function adapterLink(props) {
  return React.forwardRef((refProps, ref) => (
    <Link innerRef={ref} {...refProps} {...props} />
  ))
}

function ButtonLink({ to, title, linkProps = {}, ...buttonProps}) {
  return (
    <Button {...buttonProps} component={adapterLink({ to, ...linkProps})}>
      {title}
    </Button>
  )
}

export default ButtonLink