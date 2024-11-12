import "../index.css";

function AllStartupDropdownList({ onItemClick }) {
  // 리스트 항목들을 클릭하면 onItemClick 함수가 호출되어 선택된 값을 전달
  return (
    <ul className="DropdownListLayer">
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("누적 투자금액 높은순")}
      >
        누적 투자금액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("누적 투자금액 낮은순")}
      >
        누적 투자금액 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("매출액 높은순")}
      >
        매출액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("매출액 낮은순")}
      >
        매출액 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("고용 인원 많은순")}
      >
        고용 인원 많은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("고용 인원 적은순")}
      >
        고용 인원 적은순
      </li>
    </ul>
  );
}

export default AllStartupDropdownList;

// //Api로 데이터를 받아 왔다고 가정했을 경우
// list: [
//   { id: 1, name: '스타트업 A', investment: 5000, revenue: 2000, employees: 50 },
//   { id: 2, name: '스타트업 B', investment: 3000, revenue: 1000, employees: 30 },
//   { id: 3, name: '스타트업 C', investment: 10000, revenue: 5000, employees: 70 },
//   { id: 4, name: '스타트업 D', investment: 7000, revenue: 4000, employees: 40 },
// ]

// function ParentComponent() {
//   // API에서 가져온 데이터를 저장할 상태
//   const [dataList, setDataList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]); // 필터링된 데이터를 저장할 상태
//   // API 데이터 불러오기
//   const apiData = async () => {
//     const products = await getApi();
//     setDataList(products.list); // 전체 데이터 저장
//     setFilteredList(products.list); // 초기에는 모든 데이터를 필터링된 데이터로 설정
//   };
//   // 필터링된 데이터를 업데이트하는 함수
//   const handleItemClick = (filter) => {
//     let sortedData = [...dataList]; // 데이터 복사
//     switch (filter) {
//       case "누적 투자금액 높은순":
//         sortedData.sort((a, b) => b.investment - a.investment); // 내림차순 정렬
//         break;
//       case "누적 투자금액 낮은순":
//         sortedData.sort((a, b) => a.investment - b.investment); // 오름차순 정렬
//         break;
//       case "매출액 높은순":
//         sortedData.sort((a, b) => b.revenue - a.revenue);
//         break;
//       case "매출액 낮은순":
//         sortedData.sort((a, b) => a.revenue - b.revenue);
//         break;
//       case "고용 인원 많은순":
//         sortedData.sort((a, b) => b.employees - a.employees);
//         break;
//       case "고용 인원 적은순":
//         sortedData.sort((a, b) => a.employees - b.employees);
//         break;
//       default:
//         break;
//     }
//     setFilteredList(sortedData); // 필터링된 데이터를 상태에 업데이트
//   };
//   // 컴포넌트가 마운트될 때 데이터 호출
//   useEffect(() => {
//     apiData();
//   }, []);
//   return (
//     <div>
//       <AllStartupDropdownList onItemClick={handleItemClick} />
//       <ul>
//         {filteredList.map((data) => (
//           <li key={data.id}>
//             {data.name} - 투자금액: {data.investment} - 매출액: {data.revenue} -
//             고용 인원: {data.employees}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
