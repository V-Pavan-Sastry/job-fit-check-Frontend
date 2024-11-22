import { Component, Input, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import { MeterGroupModule } from 'primeng/metergroup';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-reesults',
  standalone: true,
  imports: [AccordionModule,TagModule,ProgressBarModule,CommonModule,MeterGroupModule,ScrollPanelModule],
  templateUrl: './reesults.component.html',
  styleUrl: './reesults.component.css'
})
export class ReesultsComponent implements OnInit {
  @Input() data!: any;
  trueRequirementsList:any;
  falseRequirementsList:any;
  trueAddSkillList:any;
  falseAddSkillList:any;
  resumeScore:any;
  requirementScore:any;
  addrequirementScore:any;

  ngOnInit(): void {

    console.log(this.data.analysis.res.REQUIREMENT);

   this.resumeScore = [
      { label: 'How well does the Job Profile suite you?', value: Number(this.data.analysis.res.PERCENTAGE_MATCH), color: '#34d399' }
  ];
  
    this.trueRequirementsList = this.data.analysis.res.REQUIREMENT.filter(
      (req:any) => req[Object.keys  (req)[0]] === true
    ).map((req:any) => Object.keys(req)[0]);
  
    this.falseRequirementsList = this.data.analysis.res.REQUIREMENT.filter(
      (req:any) => req[Object.keys(req)[0]] === false
    ).map((req:any) => Object.keys(req)[0]);

    this.trueAddSkillList= this.data.analysis.res.ADDITIONAL_SKILLS.filter(
      (req:any) => req[Object.keys(req)[0]] === true
    ).map((req:any) => Object.keys(req)[0]);
  
    this.falseAddSkillList = this.data.analysis.res.ADDITIONAL_SKILLS.filter(
      (req:any) => req[Object.keys(req)[0]] === false
    ).map((req:any) => Object.keys(req)[0]);

    const reqScore= this.trueRequirementsList.length/(this.trueRequirementsList.length+this.falseRequirementsList.length) *100
    this.requirementScore = [
      { label: 'How well do you match the requirements in JD?', value: Number(reqScore), color: '#34d399' }
  ];

    const addreqScore= this.trueAddSkillList.length/(this.trueAddSkillList.length+this.falseAddSkillList.length) *100
    this.addrequirementScore = [
      { label: 'How well do your skills align with the requirements in JD??', value: Number(addreqScore), color: '#34d399' }
  ];

  }
  
  }
