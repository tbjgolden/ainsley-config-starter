(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.AinsleyConfigStarter = {}));
}(this, (function (exports) { 'use strict';

    var config = {
      children: ['*,::after,::before{box-sizing:border-box;outline-offset:0;border:0 solid}[type=button],[type=date],[type=datetime-local],[type=email],[type=file],[type=image],[type=month],[type=number],[type=password],[type=reset],[type=search],[type=submit],[type=tel],[type=text],[type=time],[type=url],[type=week],a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,button,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,time,tt,u,ul,var,video{margin:0;padding:0;border:0 solid;background:0 0;font:inherit;color:inherit;text-align:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{overflow-y:scroll;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,q::after,q::before{content:none}textarea{resize:vertical;overflow:auto}applet,canvas,img,object,svg,video{max-width:100%;height:auto}', {
        children: [['', [['{scalar}', '{scale}']]], ['', [['{direction}', '{scale}']]], ['', [['{flexCrossAxes}', '{flexCrossAxis}']]], ['c', [['color', '{colors}']]], ['bac', [['background-color', '{colors}']]], ['fosz', [['font-size', '{headerTypeScale}'], ['line-height', 1.2]]], ['fosz', [['font-size', '{copyTypeScale}'], ['line-height', 1.3]]], ['pa', [['padding', '{scale}']]], ['pa', [['padding-{direction}', '{scale}']]], ['bap', [['background-position', '{xLoc} {yLoc}']]], ['bo', [['border-{direction}', '{scale} solid {colors}']]], ['fl', [['flex', '{flexChange} {flexChange} {flexBasis}']]], ['ov', [['overflow', '{overflow} {overflow}']]], ['Display', {
          i: 'inline',
          b: 'block',
          fl: 'flex',
          n: 'none',
          ib: 'inline-block',
          ifl: 'inline-flex'
        }], ['Text-Decoration', {
          l: 'line-through',
          u: 'underline',
          n: 'none'
        }], ['FOnt-STyle', {
          i: 'italic',
          n: 'normal'
        }], ['Text-TransForm', {
          u: 'uppercase',
          l: 'lowercase'
        }], ['OVerflow-Wrap', {
          bw: 'break-word',
          a: 'anywhere',
          n: 'normal'
        }], ['BAckground-Repeat', {
          r: 'repeat',
          n: 'no-repeat'
        }], ['Position', {
          r: 'relative',
          a: 'absolute',
          f: 'fixed',
          s: 'sticky'
        }], ['Text-Align', {
          l: 'left',
          c: 'center',
          r: 'right',
          j: 'justify'
        }], ['Vertical-Align', {
          t: 'top',
          m: 'middle',
          b: 'bottom'
        }], ['CUrsor', {
          d: 'default',
          p: 'pointer'
        }], ['Pointer-Events', {
          n: 'none',
          a: 'all'
        }], ['Z-Index', {
          0: '0',
          1: '1',
          2: '2',
          4: '4',
          8: '8',
          16: '16',
          32: '32'
        }], ['Opacity', {
          0: '0',
          10: '10',
          20: '20',
          40: '40',
          80: '80',
          100: '100'
        }], ['White-Space', {
          p: 'pre',
          pw: 'pre-wrap',
          nw: 'nowrap',
          n: 'normal'
        }], ['BAckground-SiZe', {
          cv: 'cover',
          ct: 'contain'
        }], ['FLex-Direction', {
          r: 'row',
          c: 'column',
          rr: 'row-reverse',
          cr: 'column-reverse'
        }], ['Justify-Content', {
          c: 'center',
          fs: 'flex-start',
          fe: 'flex-end',
          sb: 'space-between',
          se: 'space-evenly'
        }], ['Line-Height', {
          B: 1,
          H: 1.2,
          C: 1.3
        }], ['FOnt-Weight', {
          N: 400,
          M: 600,
          B: 700
        }], {
          variables: {
            '+scale': {
              N1: '-1px',
              N2: '-2px',
              N3: '-3px',
              N10: '-4px',
              N15: '-6px',
              N20: '-8px',
              N25: '-12px',
              N30: '-16px',
              N35: '-24px',
              N40: '-32px',
              N45: '-48px',
              N50: '-64px',
              N55: '-96px',
              N60: '-128px',
              N65: '-192px',
              N70: '-256px',
              N75: '-384px',
              N80: '-512px',
              N85: '-768px',
              N90: '-1024px',
              N95: '-1536px',
              NP50: '-50%',
              NP: '-100%',
              NH: '-100vh',
              NW: '-100vw',
              NX: '-11111111px'
            }
          },
          children: [['ma', [['margin', '{scale}']]], ['ma', [['margin-{direction}', '{scale}']]]]
        }],
        variables: {
          '?overflow': {
            h: 'hidden',
            s: 'scroll',
            a: 'auto',
            v: 'visible'
          },
          '?flexCrossAxes': {
            ai: 'align-items',
            as: 'align-self',
            ac: 'align-content'
          },
          '?flexCrossAxis': {
            fs: 'flex-start',
            fe: 'flex-end',
            c: 'center',
            b: 'baseline',
            s: 'stretch'
          },
          '?flexChange': {
            0: '0',
            1: '1',
            2: '2',
            x: '11111111'
          },
          '?flexBasis': {
            0: '0%',
            a: 'auto',
            p: '100%'
          },
          '?xLoc': {
            l: 'left',
            r: 'right',
            c: 'center'
          },
          '?yLoc': {
            t: 'top',
            b: 'bottom',
            c: 'center'
          },
          '?scalar': {
            w: 'width',
            xw: 'max-width',
            nw: 'min-width',
            h: 'height',
            xh: 'max-height',
            nh: 'min-height',
            bor: 'border-radius'
          },
          '?direction': {
            t: 'top',
            l: 'left',
            r: 'right',
            b: 'bottom'
          },
          '?colors': {
            W: 'white',
            B: 'black',
            TR: 'transparent',
            G98: 'hsl(0,0%,98%)',
            G94: 'hsl(0,0%,94%)',
            G88: 'hsl(0,0%,88%)',
            G80: 'hsl(0,0%,80%)',
            G30: 'hsl(0,0%,30%)',
            G20: 'hsl(0,0%,20%)',
            G10: 'hsl(0,0%,10%)',
            B05: 'hsla(0,0%,0%,05%)',
            B10: 'hsla(0,0%,0%,10%)',
            B20: 'hsla(0,0%,0%,20%)',
            B40: 'hsla(0,0%,0%,40%)',
            B80: 'hsla(0,0%,0%,80%)',
            W05: 'hsla(0,0%,100%,05%)',
            W10: 'hsla(0,0%,100%,10%)',
            W20: 'hsla(0,0%,100%,20%)',
            W40: 'hsla(0,0%,100%,40%)',
            W80: 'hsla(0,0%,100%,80%)',
            PRIMARY: '#8d1d90',
            ALTPRIMARY: '#9d3ea0',
            SECONDARY: '#b7de58',
            ALTSECONDARY: '#c1e270',
            GOOD: '#3bb273',
            LIGHTGOOD: '#ebf7f1',
            WARN: '#e1bc29',
            LIGHTWARN: '#fcf8e9',
            BAD: '#e15554',
            LIGHTBAD: '#fceeed',
            MSG: '#3d70b2',
            LIGHTMSG: '#ebf0f7'
          },
          '?headerTypeScale': {
            h1: '72px',
            h2: '48px',
            h3: '32px',
            h4: '24px',
            h5: '20px'
          },
          '?copyTypeScale': {
            lg: '20px',
            md: '16px',
            sm: '14px',
            xs: '12px'
          },
          '?scale': {
            0: '0',
            1: '1px',
            2: '2px',
            3: '3px',
            10: '4px',
            15: '6px',
            20: '8px',
            25: '12px',
            30: '16px',
            35: '24px',
            40: '32px',
            45: '48px',
            50: '64px',
            55: '96px',
            60: '128px',
            65: '192px',
            70: '256px',
            75: '384px',
            80: '512px',
            85: '768px',
            90: '1024px',
            95: '1536px',
            p50: '50%',
            p: '100%',
            h: '100vh',
            w: '100vw',
            x: '11111111px'
          }
        }
      }]
    };
    var variations = [[['o', ':hover'], ['o', ':focus'], ['o', ':active']], [['s', '@media(min-width:384px)'], ['m', '@media(min-width:768px)'], ['l', '@media(min-width:1024px)'], ['x', '@media(min-width:1536px)']]];
    var options = {
      addVariationToSelector: function addVariationToSelector(selector, variationAbbreviation) {
        return variationAbbreviation + '-' + selector;
      },
      addPropertyToSelector: function addPropertyToSelector(selector, propertyAbbreviation) {
        return selector + propertyAbbreviation.toLowerCase();
      },
      addValueToSelector: function addValueToSelector(selector, valueAbbreviation) {
        return selector + valueAbbreviation.toUpperCase();
      },
      abbreviateProperty: function abbreviateProperty(propertyName) {
        return [propertyName.replace(/[^A-Z]+/g, '').toLowerCase(), propertyName.toLowerCase()];
      }
    };

    exports.config = config;
    exports.options = options;
    exports.variations = variations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ainsley-config-starter.umd.development.js.map
