import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, AfterViewInit {
  constructor(private backendService: BackendCallsService) {
    
  }
  
  // Price per agency
  data_price: any[];
  agence = {
    1: 'Carpi',
    2: 'Bazzano',
    3: 'Modena',
    4: 'Soliera'
  };

  option_1: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: [0, '45%'],
        label: {
          show: true,
          formatter: '{b}: {c} €' 
        },
       
      }
    ],
    animationDuration: 0,
    animationDurationUpdate: 1000,
  }

  updatePricePerAgence(): void {
    setInterval(() => {
      this.backendService.getPricePerAgence().subscribe(
        (res) => {
          this.data_price = res.map(data => ({
            value: data.price_total,
            name: this.agence[data.agence_numero]  
          }));
         
          this.option_1 = {
            ...this.option_1,
            series: [{
              ...this.option_1.series[0],
              data: [...this.data_price]
            }]
          };
        },
        (err) => {
          console.log("error : ",err ); 
        }
      )

      this.option_1 = {
        ...this.option_1,
        series: [{
          ...this.option_1.series[0],
          data: [...this.data_2]
        }]
      };
    }, 10000);
  }

  initializePricePerAgence(): void {
    this.backendService.getPricePerAgence().subscribe(
      (res) => {
        this.data_price = res.map(data => ({
          value: data.price_total,
          name: this.agence[data.agence_numero]  // Lookup the name using agence_numero
        }));
       
        this.option_1 = {
          ...this.option_1,
          series: [{
            ...this.option_1.series[0],
            data: [...this.data_price]
          }]
        };
      },
      (err) => {
        console.log("error : ",err ); 
      }
    )
  }

  // Quantity per Agence
  data_2: number[] = [];
  option_2: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Bazzano', 'Modena', 'Soliera', 'Carpi'],
      inverse: false,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 3
    },
    yAxis: {

    },
    series: [
      {
        name: 'Quantity',
        type: 'bar',
        data: this.data_2,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 1000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };

  updateTotalCustomers(): void {
    setInterval(() => {
      this.backendService.getQuantityByAgence().subscribe(
        (res) => {
          this.data_2 = res.map(data => data.quantity);
        },
        (err) => {
          console.log("error : ",err ); 
        }
      )

      this.option_2 = {
        ...this.option_2,
        series: [{
          ...this.option_2.series[0],
          data: [...this.data_2]
        }]
      };
    }, 5000);
  }

  initializeTotalCustomers(): void {
    this.backendService.getQuantityByAgence().subscribe(
      (res) => {
        this.data_2 = res.map(data => data.quantity);
        this.option_2 = {
          ...this.option_2,
          series: [{
            ...this.option_2.series[0],
            data: [...this.data_2]
          }]
        };
      },
      (err) => {
        console.log("error : ",err ); 
      }
    )
  }

    // Quantity per Category 
  data = [];
  
  option_3: EChartsOption = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', 'Abbigliamento', 'BiancheriaCasa', 'CapiInPelle', 'Sartoria'],
    source: this.data
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  initializeQuantityData(): void {
    this.backendService.getQuantityPerCategory().subscribe(
      (res) => {
        this.updateQuantityData(res); 
      },
      (err) => {
        console.log("Error fetching initial data: ", err);
      }
    );
  
    setInterval(() => {
      this.backendService.getQuantityPerCategory().subscribe(
        (res) => {
          this.updateQuantityData(res);
        },
        (err) => {
          console.log("Error updating data: ", err);
        }
      );
    }, 10000);
  }
  

  updateQuantityData(res: any[]): void {
    let product: string;
    res.forEach(item => {
      switch(item.numero_agence) {
        case 1:
          product = 'Carpi';
          break;
        case 2:
          product = 'Bazzano';
          break;
        case 3:
          product = 'Modena';
          break;
        case 4:
          product = 'Soliera';
          break;
        default:
          product = '';
      }
  
      let agencyEntry = this.data.find(entry => entry.product === item.numero_agence);
  
      if (!agencyEntry) {
        agencyEntry = { product: product  };
        this.data.push(agencyEntry);
      }
  
      agencyEntry[item.categorie] = item.total_quantity;
    });
  
    const dataset = this.data.map(entry => {
      return {
        product: entry.product,
        Abbigliamento: entry.Abbigliamento || 0,
        BiancheriaCasa: entry.BiancheriaCasa || 0,
        CapiInPelle: entry.CapiInPelle || 0,
        Sartoria: entry.Sartoria || 0
      };
    });
  
    this.option_3 = {
      ...this.option_3,
      dataset: {
        ...this.option_3.dataset,
        source: dataset
      }
    };
  }
  
  // total Client connected per Agence
  data_4: number[] = [];
  option_4: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Bazzano', 'Modena', 'Soliera', 'Carpi'],
      inverse: false,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 3
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Quantity',
        type: 'bar',
        data: this.data_4,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 1000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };

  updateCustomerConnectedPerAgence(): void {
    setInterval(() => {
      this.backendService.getTotalOperationsByAgence().subscribe(
        (res) => {
          this.data_4 = res.map(data => data.total_operations);
          
        },
        (err) => {
          console.log("error : ",err ); 
        }
      )
      this.option_4 = {
        ...this.option_4,
        series: [{
          ...this.option_4.series[0],
          data: [...this.data_4]
        }]
      };
    }, 10000);
  }

  initializeCustomerConnectedPerAgence(): void {
    this.backendService.getTotalOperationsByAgence().subscribe(
      (res) => {
        this.data_4 = res.map(data => data.total_operations);
        this.option_4 = {
          ...this.option_4,
          series: [{
            ...this.option_4.series[0],
            data: [...this.data_4]
          }]
        };
      },
      (err) => {
        console.log("error : ", err); 
      }
    )
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  public totalQuantity: any;
  getTotalQuantityToday() {
    this.backendService.getTotalQuantityToday().subscribe(
      (res) => {
        this.totalQuantity = res;
      },
      (err) => {
        console.log("error", err);
      }
    )
  }

  public totalProfit: any;
  getTotalProfit() {
    this.backendService.getTotalProfit().subscribe(
      (res) => {
        this.totalProfit = res;
      },
      (err) => {
        console.log("error", err);
      }
    )
  }

  public totalClientConnected: any;
  getOperationsNumber() {
    this.backendService.getOperationsOfToDay().subscribe(
      (res) => {
        this.totalClientConnected = res;
      },
      (err) => {
        console.log("error", err); 
      }
    )
  }

  private intervalId: any;

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit(): void {
    // mounth
    this.initializeTotalCustomers();
    this.updateTotalCustomers();

    this.initializeQuantityData();
    // this.updateQuantityData();

    this.initializePricePerAgence();
    this.updatePricePerAgence();
    
    this.updateCustomerConnectedPerAgence();
    this.initializeCustomerConnectedPerAgence();
    
    // To Day
    this.getOperationsNumber(); 
    this.getTotalProfit();
    this.getTotalQuantityToday();
    this.intervalId = setInterval(() => {
      this.getOperationsNumber();
      this.getTotalProfit();
      this.getTotalQuantityToday();
    }, 5000);
    
  }
}
