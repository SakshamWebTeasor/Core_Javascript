import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DraggableComponent = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
`;

const StaticButtonComponent = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

function App() {
  const createDragHandler = (setPosition, componentRef) => {
    return (e) => {
      const handleMouseMove = (e) => {
        setPosition({
          x: e.clientX - componentRef.current.offsetWidth / 2,
          y: e.clientY - componentRef.current.offsetHeight / 2,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    };
  };

  const createInitialState = (initialValues, localStorageKey) => {
    const storedPosition = JSON.parse(localStorage.getItem(localStorageKey));
    return storedPosition === null ? initialValues : storedPosition;
  };

  const component1Ref = useRef();
  const [position1, setPosition1] = useState(
    createInitialState({ x: 0, y: 0 }, "position1")
  );

  const component2Ref = useRef();
  const [position2, setPosition2] = useState(
    createInitialState({ x: 150, y: 0 }, "position2")
  );

  const component3Ref = useRef();
  const [position3, setPosition3] = useState(
    createInitialState({ x: 300, y: 0 }, "position3")
  );

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      if (position1 !== JSON.parse(localStorage.getItem("position1")))
        localStorage.setItem("position1", JSON.stringify(position1));
      if (position2 !== JSON.parse(localStorage.getItem("position2")))
        localStorage.setItem("position2", JSON.stringify(position2));
      if (position3 !== JSON.parse(localStorage.getItem("position3")))
        localStorage.setItem("position3", JSON.stringify(position3));
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [position1, position2, position3]);

  return (
    <div>
      <DraggableComponent
        ref={component1Ref}
        style={{ left: `${position1.x}px`, top: `${position1.y}px` }}
        onMouseDown={createDragHandler(setPosition1, component1Ref)}
      >
        Drag me 1!
      </DraggableComponent>
      <DraggableComponent
        ref={component1Ref}
        style={{ left: `${position1.x}px`, top: `${position1.y}px` }}
        onMouseDown={createDragHandler(setPosition1, component1Ref)}
      >
        Drag me 1!
      </DraggableComponent>
      <DraggableComponent
        ref={component2Ref}
        style={{ left: `${position2.x}px`, top: `${position2.y}px` }}
        onMouseDown={createDragHandler(setPosition2, component2Ref)}
      >
        Drag me 2!
      </DraggableComponent>
      <DraggableComponent
        ref={component3Ref}
        style={{ left: `${position3.x}px`, top: `${position3.y}px` }}
        onMouseDown={createDragHandler(setPosition3, component3Ref)}
      >
        Drag me 3!
      </DraggableComponent>
      {/* <StaticButtonComponent onClick={handleAddComponent}>Add Draggable Component</StaticButtonComponent> */}
      <StaticButtonComponent
        onClick={() => {
          setPosition1({ x: 1, y: 1 });
          setPosition2({ x: 205, y: 1 });
          setPosition3({ x: 103, y: 1 });
        }}
      >
        Set Initial Position
      </StaticButtonComponent>
    </div>
  );
}

export default App;
