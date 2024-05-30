import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  objective: string = "Objective: Doing research can provide me with opportunities for using and improving my programming and analytical skill. I have a true passion for developing methods and applications to solve difficult problems in computer science and biological fields. Proficient in programming, I can be flexible to develop solutions to various problems in different environments. After spending several years on postgraduate degrees, including working as a system analyst and a programmer, I am excellent at identifying and analysing problems and developing a solution to address those problems.";
  education1: string = "- PhD degree: Computational Modelling and Systems Biology, Faculty of Agriculture and Life Sciences, Lincoln University, New Zealand (2020-Current)."
  education2: string = "- PhD degree (outstanding): Computer Science, King Mongkut's Institute of Technology Ladkrabang, Bangkok, Thailand (2012-2018)."
  education3: string = "- Master degree : Computer Science, King Mongkut's Institute of Technology Ladkrabang, Bangkok, Thailand (2008-2011)."
  education4: string = "- Bachelor degree : Computer Science, King Mongkut's Institute of Technology Ladkrabang, Bangkok, Thailand (2001-2004)."
  figProfile: string = "assets/img/profile.jpg";

  content1: string = "Drug repositioning, also known as drug repurposing, seeks to identify FDA-approved drugs for the treatment of various diseases (Hodos et al., 2016). This strategy, alternatively referred to as drug repositioning, rediscovery, or reprofiling, aims to uncover new therapeutic applications for preapproved drugs or existing medications. The fundamental concept behind repurposing is to identify novel beneficial effects for a specific ailment in a previously clinically utilized drug or one that faced setbacks in later stages of development (Chong and Sullivan, 2007). Drug repositioning is involved in two main procedures, as figure 1.";
  fig1_description: string = "Figure 1. Drug repositioning approaches for drug discovery and validation."
  fig1: string = "assets/img/Fig1.png";

  content2: string = "The process of developing new drugs is arduous, time-consuming, and financially burdensome, with a substantial risk of failure due to the selective nature of drug mechanisms. Drug repurposing mitigates the risk of failure by utilizing FDA-approved drugs, eliminating the need for human trials. Additionally, the advantages of drug repurposing include a lower risk of failure, a shorter development cycle, a higher success rate, and reduced investment (Flower, 2020). Table 1 provides an overview of repurposed drugs widely employed in the treatment of various severe diseases and disorders, including cancers, psychiatric conditions, gastrointestinal issues, respiratory infections, and more.";
  table1: string = "assets/img/Table1.png";
  table1_description: string = "Table 1. Some of the widely used prominent repurposed drugs."

  content3: string = "Our study is based on the Drug Repurposing Knowledge Graph (DRKG) created by (Loannidis, 2020), which compiles data from various biomedical databases. It contains 97,238 entities distributed across 13 entity types and comprises 5,874,261 triplets associated with 107 edge types. For our purposes, we narrow down our focus to edge types connecting four entity types—gene, compound, anatomy, and disease—resulting in a knowledge graph consisting of 69,036 entities and 4,885,854 edges. We expect to obtain fast and promising results for the use of Optane-PM to process large datasets in the context of Drug Repurposing.";

  
}
