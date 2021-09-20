import React from 'react';
import WidgetMovies from './WidgetMovies';


function ContentRowMovies ({data}) {
        return (				
                        
            <div className="row">

            {data.map((dataToRender, index) => 
                <WidgetMovies 
                    key={index} 
                    title={dataToRender.title}
                    border={dataToRender.border}
                    text={dataToRender.text}
                    quantity={dataToRender.quantity}
                    icon={dataToRender.icon}
                />
            )}    
                
            </div>
        )
            

}
export default ContentRowMovies