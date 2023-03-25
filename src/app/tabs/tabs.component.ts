import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | any;

  constructor() {
    console.log(this.tabs);
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    console.log(this.tabs);
    console.log(this.tabs.toArray());
    const activeTabs = this.tabs?.filter((tab: any) => tab.active );

    if(activeTabs?.length === 0) {
      this.selectTab(this.tabs?.first);
    }
  }

  selectTab(tab: TabComponent){
    this.tabs?.toArray().forEach((tab: any) => (tab.active = false));
    tab.active = true;
  }

}
