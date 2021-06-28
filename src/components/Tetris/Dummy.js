
import React from 'react';

function Dummy () {

    React.useEffect(() => { console.log('dummy mounted') });

    return (<div>hey</div>);
}

export default Dummy;