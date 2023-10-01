import { type ISourceOptions } from 'tsparticles-engine';

export const options: ISourceOptions = {
  fpsLimit: 120,
  particles: {
    bounce: {
      vertical: {
        value: {
          min: 0.5,
          max: 0.6,
        },
      },
    },
    color: {
      value: [
        '#3998D0',
        '#2EB6AF',
        '#A9BD33',
        '#FEC73B',
        '#F89930',
        '#F45623',
        '#D62E32',
        '#EB586E',
        '#9952CF',
      ],
    },
    number: {
      value: 0,
    },
    destroy: {
      mode: 'split',
      split: {
        count: 2,
        factor: {
          value: {
            min: 1.5,
            max: 2,
          },
        },
        rate: {
          value: {
            min: 1,
            max: 2,
          },
        },
      },
    },
    opacity: {
      value: 0.35,
    },
    size: {
      value: {
        min: 10,
        max: 20,
      },
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        maxSpeed: 60,
      },
      speed: {
        min: 10,
        max: 15,
      },
      direction: 'none',
      random: false,
      straight: false,
      outModes: {
        bottom: 'split',
        default: 'bounce',
        top: 'none',
      },
      trail: {
        enable: true,
        fillColor: '#fff',
        length: 3,
      },
    },
  },
  detectRetina: true,
  background: {
    color: '#fff',
  },
  emitters: [
    {
      direction: 'top',
      life: {
        count: 0,
        duration: 0.15,
        delay: 1,
      },
      rate: {
        delay: 0.1,
        quantity: 2,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 0, // 左侧
        y: 0,
      },
    },
    {
      direction: 'top',
      life: {
        count: 0,
        duration: 0.15,
        delay: 1,
      },
      rate: {
        delay: 0.1,
        quantity: 2,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 100, // 右侧
        y: 0,
      },
    },
  ],
};

export const optionsForMobile: ISourceOptions = {
  fpsLimit: 120,
  particles: {
    bounce: {
      vertical: {
        value: {
          min: 0.5,
          max: 0.6,
        },
      },
    },
    color: {
      value: [
        '#3998D0',
        '#2EB6AF',
        '#A9BD33',
        '#FEC73B',
        '#F89930',
        '#F45623',
        '#D62E32',
        '#EB586E',
        '#9952CF',
      ],
    },
    number: {
      value: 0,
    },
    destroy: {
      mode: 'split',
      split: {
        count: 1,
        factor: {
          value: {
            min: 20,
            max: 30,
          },
        },
        rate: {
          value: {
            min: 0,
            max: 1,
          },
        },
      },
    },
    opacity: {
      value: 0.35,
    },
    size: {
      value: {
        min: 10,
        max: 20,
      },
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        maxSpeed: 35,
      },
      speed: {
        min: 5,
        max: 10,
      },
      direction: 'none',
      random: false,
      straight: false,
      outModes: {
        bottom: 'split',
        default: 'bounce',
        top: 'none',
      },
      trail: {
        enable: true,
        fillColor: '#fff',
        length: 3,
      },
    },
  },
  detectRetina: true,
  background: {
    color: '#fff',
  },
  emitters: [
    {
      direction: 'top',
      life: {
        count: 1,
        duration: 0.05,
        delay: 4,
      },
      rate: {
        delay: 1,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 0, // 左侧
        y: 0,
      },
    },
    {
      direction: 'top',
      life: {
        count: 1,
        duration: 0.05,
        delay: 4,
      },
      rate: {
        delay: 1,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 100, // 右侧
        y: 0,
      },
    },
  ],
};
