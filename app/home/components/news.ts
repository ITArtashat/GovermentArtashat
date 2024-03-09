interface Props {
  src?: string;
  title: string;
  description: string;
  title2?:string
  description2?:string
}

export const news: Props[] = [
  {
    src: "/images/home-page-images/lastNewsimg1.jpg",
    title: "01 Մարտ 2024",
    description: "Հաճելի անակնկալ՝ գարնանային օրվա առթիվ",
  },
  {
    title: "12 Փետրվար 2024",
    description: "Համայնքի մի շարք բնակավայրերում մեկնարկել են ոռոգման համակարգի կառուցման աշխատանքները",
    title2:"30 Հունվար 2024",
    description2:"Արտաշատում նշվել է ՀՀ զինված ոժերի կազմավորման 32-ամյակը"
  },
  {
    src: "/images/home-page-images/lastNewsimg2.jpg",
    title: "19 Փետրվարի 2024 ",
    description: " Ասմունքի մրցույթ՝ նվիրված Թումանյանի ծննդյան և գիրք նվիրելու օրվա առթիվ",
  },
  {
    title: "18 Փետրվարի 2024",
    description: "Արման Անդրեասյանը հռչակվեց եվրոպայի չեմպիոն",
    title2:"19 Փետրվարի 2024",
    description2:"Աշխատանքային խորհրդակցություն՝ գյուղական բնակավայրերի վարչական ղեկավարների մասնակցությամբ"
  },
];
