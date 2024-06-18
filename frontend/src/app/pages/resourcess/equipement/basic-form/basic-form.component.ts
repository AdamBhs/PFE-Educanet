import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {

  equipementData = {
    cyclesNumber: 123,
    workTime: "1:40",
    status: "ON"
  }

  projectFormData = {
    AgencyName: "",
    nome: "",
    Submited: false
  };


  verticalLayout: FormLayout = FormLayout.Vertical;
  
  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];

  Nome = [
    {id: '1', name: 'GiaccaConSpacchi'},
    {id: '2', name: 'GiaccaVeloce'},
    {id: '3', name: 'GiaccaSenzaSpacchi'},
    {id: '4', name: 'cotone'},
    {id: '5', name: 'TessutoElasticizzato'},
    {id: '6', name: 'GiaccheSportive'},
    {id: '7', name: 'GiaccheSportiveCorte'},
    {id: '8', name: 'classico'},
    {id: '9', name: 'Velluto'},
    {id: '10', name: 'ClassicoStretch'},
    {id: '11', name: 'Topper'},
    {id: '12', name: 'TopperStretch'},
    {id: '13', name: 'LinoClassico'},
    {id: '14', name: 'LinoTopper'},
  ]
  
  option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },

    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
     
    ]
  };


  submitProjectForm({ valid, directive, data, errors }) {
    if (valid && this.projectFormData.AgencyName !== "" && this.projectFormData.nome !== "") {
      this.projectFormData.Submited = true;
      this.equipementData.cyclesNumber = 159;

    } else {
      
    }
  }
}
