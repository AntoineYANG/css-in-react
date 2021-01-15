/*
 * @Author: Kanata You 
 * @Date: 2020-09-09 02:02:08 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-01-15 19:02:33
 */
import React from "react";
import { useStyleWrapper, createStyle, createAnimation, connectStyle } from './cssinreact';


const fadeIn = createAnimation("fade-in", {
  "0%":   { filter: "blur(4px)" },
  "100%": { filter: "blur(0)"   }
});

const paint = createAnimation("paint", {
  "0%":   { color: "rgb(30,113,164)" },
  "100%": { color: "rgb(71,196,255)" }
});

const style1 = createStyle({
  "section": {
    margin:   "16px auto",
    border:   "1px solid white",
    padding:  "4vh 6vw 2vh",
    width:    "12vw",
    color:    "white",
    animation: fadeIn({ duration: "1s" })
  },
  "section label": {
    animation: paint({
      duration: "1.2s",
      iterationCount: "infinite",
      timingFunction: "ease-in-out",
      direction: "alternate"
    })
  }
});

const style2 = createStyle({
  "section": {
    backgroundColor:  "rgb(46,153,232)",
    color:            "rgb(13,13,13)",
    margin:           "16px auto",
    padding:          "4vh 6vw 2vh",
    width:            "10vw",
    transition:       "background-color 1s"
  },
  "section:hover": {
    backgroundColor:  "rgb(121,211,255)"
  }
});

const BoxFC: React.FC = props => {
  const StyleWrapper = useStyleWrapper(style1);
  
  return (
    <StyleWrapper>
      <section>
        <label>Functional Component</label>
        <p>{ props.children }</p>
      </section>
    </StyleWrapper>
  );
};

class BoxCC extends React.Component {

  public constructor(props: {}) {
    super(props);
  }
  
  @connectStyle(style2)
  public render(): JSX.Element {
    return (
      <section>
        <label>Class Component</label>
        <p>{ this.props.children }</p>
      </section>
    );
  }

};

const Demo: React.FC = () => {
  return (
    <div>
      <BoxFC key="fc0" >
        one
      </BoxFC>
      <BoxFC key="fc1" >
        two
      </BoxFC>
      <BoxCC key="cc0" >
        three
      </BoxCC>
      <BoxCC key="cc1" >
        four
      </BoxCC>
    </div>
  );
};

export default Demo;
