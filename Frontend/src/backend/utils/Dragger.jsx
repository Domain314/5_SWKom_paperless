import React from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dragger = ({ entries, renderChild, handleDragEnd, direction = 'horizontal', className = 'flex flex-row flex-wrap' }) => {

    function renderInput(entry, index) {

        return (

            <Draggable key={`dragable-${index}`} draggableId={`dragable-${index}`} index={index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="" key={index}>

                            {renderChild(entry, index)}
                        </div>
                    </div>
                )}
            </Draggable >

        );
    }


    return (
        <DragDropContext onDragEnd={handleDragEnd} >
            <Droppable droppableId={'dropable-id'} direction={direction}>
                {(provided) => (
                    <div
                        className={className}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >

                        {entries.map((entry, index) => renderInput(entry, index))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Dragger;