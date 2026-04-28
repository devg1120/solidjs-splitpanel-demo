import './App.css'


import type { ParentComponent, JSXElement } from 'solid-js';
import { render } from "solid-js/web";
import { createSignal, onMount } from "solid-js";

/*
 
[solidjs]ドラッグで画面分割するコンポーネントを作ってみた

https://qiita.com/mitsuki_march/items/e7e9fd6b675a27e75c41

*/

function App() {

const PaneY: ParentComponent<{
  topElem: JSXElement,
  bottomElem: JSXElement
}> = (props) => {
  const [height, setHeight] = createSignal(0)
  let paneContainerRef: HTMLDivElement | undefined;

  let onMouseDownHandler = (e: MouseEvent) => {
    onmousemove = (e: MouseEvent) => {
      setHeight(e.clientY)
    }
    onmouseup = (e: MouseEvent) => {
      onmousemove = () => null
      onmouseup = () => null
    }
  }

  onMount(() => {
    if (paneContainerRef) {
      setHeight(paneContainerRef.clientHeight / 2)
    }
  })

  return (
    <>
      <div
        ref={paneContainerRef}
        style={{
          'display': 'flex',
          'flex-flow': 'column',
          'height': '100%',
        }}
      >
        <div style={{
          'height': `${paneContainerRef ? (height() / paneContainerRef.clientHeight)*100 : 50}%`,
          'background-color': 'rgba(120, 120, 230, 0.2)'
        }}>
          {props.topElem}
        </div>
        <div
          onMouseDown={onMouseDownHandler}
          style='
            min-width: 5px;
            min-height: 5px;
            background-color: #c0c0c0;
            cursor: row-resize;
          '
        ></div>
        <div
          style={{
            'height': `${paneContainerRef ? (100 - (height() / paneContainerRef?.clientHeight)*100) : 50}%`,
            'background-color': 'rgba(120, 230, 120, 0.2)'
          }}
        >
          {props.bottomElem}
        </div>
      </div>
    </>
  )
}

const PaneX: ParentComponent<{
  leftElem: JSXElement,
  rightElem: JSXElement,
}> = (props) => {
  const [width, setWidth] = createSignal(0)
  let paneContainerRef: HTMLDivElement | undefined;

  let onMouseDownHandler = (e: MouseEvent) => {
    onmousemove = (e: MouseEvent) => {
      setWidth(e.clientX)
    }
    onmouseup = (e: MouseEvent) => {
      onmousemove = () => null
      onmouseup = () => null
    }
  }

  onMount(() => {
    if (paneContainerRef) {
      setWidth(paneContainerRef.clientWidth / 2)
    }
  })

  return (
    <>
      <div
        ref={paneContainerRef}
        style={{
          'display': 'flex',
          'flex-flow': 'row',
          'height': '100%',
          'width': '100%',
        }}
      >
        <div style={{
          'width': `${paneContainerRef ? (width() / paneContainerRef.clientWidth)*100 : 50}%`,
          'background-color': 'rgba(120, 120, 230, 0.2)'
        }}>
          {props.leftElem}
        </div>
        <div
          onMouseDown={onMouseDownHandler}
          style='
            min-width: 5px;
            min-height: 5px;
            background-color: #c0c0c0;
            cursor: col-resize;
          '
        ></div>
        <div
          style={{
            'width': `${paneContainerRef ? (100 - (width() / paneContainerRef?.clientWidth)*100) : 50}%`,
            'background-color': 'rgba(120, 230, 120, 0.2)'
          }}
        >
          {props.rightElem}
        </div>
      </div>
    </>
  )
}




/*
<input  type="date" tabindex={9999} />
*/
return (
  <>
  <div style="height: 100vh">
      <PaneY
        topElem={
          <PaneX
            leftElem={
	      <>
               <div>top left text</div>
               <input  type="date" tabindex={9999} />
	      </>
            }
            rightElem={
	      <>
               <div>top right text</div>
               <input  type="date" tabindex={9999} />
	      </>
            }
          ></PaneX>
        }
        bottomElem={
          <PaneX
            leftElem={
	      <>
               <div>bottom left text</div>
               <input  type="date" tabindex={9999} />
	      </>
            }
            rightElem={
	      <>
               <div>bottom right text</div>
               <input  type="date" tabindex={9999} />
	      </>
            }
          ></PaneX>
        }
      ></PaneY>
    </div>
 </>
)
}

export default App
