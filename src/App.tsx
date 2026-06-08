import './App.css'

import { SplitPanel }   from './splitPanel';

import type { ParentComponent, JSXElement } from 'solid-js';
import { render } from "solid-js/web";
import { createSignal, onMount } from "solid-js";

/*
 
[solidjs]ドラッグで画面分割するコンポーネントを作ってみた

https://qiita.com/mitsuki_march/items/e7e9fd6b675a27e75c41

*/

function App() {



/*
<input  type="date" tabindex={9999} />

  <div style="height: 100%">


*/
return (
  <>
  <div style="height:100px"/>
  <div style="height: 500px">
    <SplitPanel />
  </div>

  <div style="height:100px"/>
  <div style="height: 300px">
    <SplitPanel />
  </div>

 </>
)
}

export default App
