import { useEffect } from "react";

useEffect(() => {
    fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
        .then((response => response.json()
            .then((data => { console.log(data); })
                .catch(error => { console.error(error))
            )
}, [])

// END OF FILE =================================== //
