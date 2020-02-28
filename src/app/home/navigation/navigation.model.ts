export class NavigationModel {
    public model: any[];
  
    constructor() {
      this.model = [
        // {
        //   id: 'home',
        //   title: '主页',
        //   type: 'item',
        //   icon: 'home',
        //   url: '/home'
        // },
        {
          id: 'kjdb',
          title: 'Component',
          type: 'collapse',
          icon: 'bubble_chart',
          children: [
            {
              id: 'table',
              title: 'table',
              type: 'item',
              url: '/table'
            },
            {
              id: 'input',
              title: 'input',
              type: 'item',
              url: '/input'
            },
            {
              id: 'inputGroup',
              title: 'inputGroup',
              type: 'item',
              url: '/inputGroup'
            },
            {
              id: 'panel',
              title: 'panel',
              type: 'item',
              url: '/panel'
            },
            {
              id: 'flex',
              title: 'flex',
              type: 'item',
              url: '/flex'
            },
          ]
        },
        {
          id: 'bsdb',
          title: 'Chart',
          type: 'collapse',
          icon: 'equalizer',
          children: [
            {
              id: 'BarChart',
              title: 'BarChart',
              type: 'item',
              url: '/BarChart'
            },
            {
              id: 'Doughnut',
              title: 'Doughnut',
              type: 'item',
              url: '/doughnut'
            },
            {
              id: 'Line',
              title: 'Line',
              type: 'item',
              url: '/linechart'
            },
            {
              id: 'Pie',
              title: 'Pie',
              type: 'item',
              url: '/piechart'
            },
            {
              id: 'PolarArea',
              title: 'PolarArea',
              type: 'item',
              url: '/polarchart'
            },
            {
              id: 'Radar',
              title: 'Radar',
              type: 'item',
              url: '/radar'
            },
          ]
        }
      ]
    }
  }