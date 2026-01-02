import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    // {
    //   title: 'Linux Kernel Optimization Project',
    //   startedAt: '2020-06',
    //   where: 'Linux Foundation',
    //   descriptions: [
    //     {
    //       content:
    //         'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
    //     },
    //     {
    //       content:
    //         'Achieved significant improvements in system performance and resource management.',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: '30% improvement in system resource efficiency' },
    //         { content: 'Job Scheduler Refactor and Optimization' },
    //       ],
    //     },
    //   ],
    // },
    {
      title: '바로가기 앱 프로젝트(백엔드 세팅 및 API 개발) [진행중]',
      startedAt: '2025-04',
      endedAt: '',
      where: '키워드 매칭 기반 사용자 맞춤형 장소 추천 및 일정 관리 서비스 - (개인(4인) 프로젝트)',
      descriptions: [
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java 17, Spring Boot 3.2.1, Spring Data JPA, Spring Security, JWT, GitHub'},
            { content: '협업 프로세스 : GitHub을 활용한 브랜치 전략(Git Flow) 및 codeRabbit AI를 활용해 코드 피드백 시스템 사용'},
          ]
        },
        {
          content: '[아키텍처 설계]',
          weight: 'MEDIUM',
          descriptions: [
            {content: 'Java 17 및 Spring Boot 3 기반의 초기 프로젝트 환경 구축 및 API 표준 수립'}
          ]
        },
        {
          content: '[인증/인가 보안 강화]',
          weight: 'MEDIUM',
          descriptions: [
            {content: 'Spring Security + JWT를 도입하여 Stateless한 인증 구조 설계 및 보안성 향상'}
          ]
        },
        {
          content: '[JPA 활용]',
          weight: 'MEDIUM',
          descriptions: [
            {content: '기존 SQL 중심 방식에서 벗어나 객체 지향적 쿼리 설계를 통해 코드 재사용성 및 생산성 극대화'}
          ]
        }
      ],
    },
    {
      title: '파크골프장 통합 운영 솔루션 구축 및 고도화(여주, 천안)',
      startedAt: '2024-05',
      endedAt: '2025-10',
      where: '웹 예약부터 현장 결제, 입장 제어까지 아우르는 온·오프라인 통합 운영 솔루션 - 체인팜 주식회사',
      descriptions: [
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions : [
            {content : 'Java 1.8, Spring Boot, MyBatis, MariaDB, MongoDB, SVN, JSP, Vue.js, FireBase'}
          ]
        },
        {
          content: '엔드 투 엔드(End-to-End) 서비스 아키텍처 구현',
          weight: 'MEDIUM',
          descriptions: [
            {content: '사용자용 예약 홈페이지부터 현장 결제 키오스크, 입장 관리용 태블릿 API까지 전 과정의 백엔드 로직 전담 개발'},
            {content: '동시 접속 300명 규모의 예약 트래픽 상황에서 데이터 정합성을 유지하며 실시간 예약/취소 기능을 안정화'}
          ]
        },
        {
          content: '[문제 해결] 행정망 연동을 통한 지자체 조례 대응 및 운영 효율화',
          weight: 'MEDIUM',
          descriptions: [
            {content: '상황: 지자체 조례 변경으로 관외 거주자에 대한 복합 할인(65세 이상, 국가유공자 등) 적용 필요성 대두.'},
            {content: '해결: 행정정보공동이용시스템 API를 연동하여 실시간 본인인증 및 할인 자격 자동 검증 로직 개발'},
            {content: '효과: 현장 증빙 확인 절차를 자동화하여 행정 소요 시간을 단축하고 사용자 편의성을 획기적으로 향상'}
          ]
        },
        {
          content: '[보안 강화] 일회성(OTP) 동적 QR 시스템 도입을 통한 부정 이용 원천 차단',
          weight: 'MEDIUM',
          descriptions: [
            {content: '문제: 고정 QR코드 캡처본 공유를 통한 무단 시설 이용 사례 발생으로 인한 수익 손실'},
            {content: '개선: 1분 유효시간 기반의 일회성 QR코드 생성 로직과 키오스크/게이트 QR 인식 시 검증 API 개발'},
            {content: '해결: "이용 당일 유효성"과 "중복 사용 여부"를 실시간 검증하도록 구현하여 부정 이용률 0% 달성'}
          ]
        },
        {
          content: '[생산성 향상] 메시징(알림톡/문자) 서비스 공통 모듈화',
          weight: 'MEDIUM',
          descriptions: [
            {content: '최적화: 파편화된 발송 로직을 Interface 기반의 공통 서비스로 통합하여 신규 기능 개발 생산성 향상.'},
          ]
        }
      ],
    },
    {
      title: '마포순환열차버스 좌석 결제·탑승 시스템',
      startedAt: '2024-12',
      endedAt: '2025-04',
      where: '결제 앱부터 현장 키오스크 결제, 탑승 관리까지 전담한 버스 통합 시스템 - 체인팜 주식회사',
      descriptions: [
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java 1.8, Spring Boot, MyBatis, MariaDB, MongoDB, SVN, JSP, Vue.js, FireBase'}
          ]
        },
        {
          content:'[모빌리티 API 설계] 모바일 앱 전용 RESTful API 구축 및 표준화',
          weight: 'MEDIUM',
          descriptions: [
            {content: '내용: 실시간 일정 조회, 티켓 조회, 결제, 취소 등 모바일 앱 핵심 기능 API 6여 종 설계 및 개발'},
            {content: '성과: 상세한 API 명세서 작성을 통해 타회사(App)와의 협업 효율을 높이고, 데이터 전송 최적화로 모바일 환경에서의 응답 속도 확보'}
          ]
        },
        {
          content: '[운영 자동화] 매일 00시 미사용 티켓 50% 자동 환불 배치(Batch) 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {content: '상황: 수동 환불 처리에 따른 관리 공수 증대 및 환불 누락 발생 우려'},
            {content: '해결: Spring Batch를 활용하여 미사용 티켓을 전수 조사하고 정해진 비즈니스 로직(50% 환불)에 따라 자동 처리하는 스케줄러 개발'},
            {content: '효과: 수동 환불 작업 업무를 100% 자동화하여 관리 효율성 및 고객 만족도 제고'}
          ]
        },
        {
          content: '[현장 연동 기술] 키오스크 및 태블릿 기반의 실시간 티켓팅/탑승 시스템',
          weight: 'MEDIUM',
          descriptions: [
            {content: '개발: 현장 키오스크 결제, 실시간 티켓 출력, 태블릿을 통한 QR 코드 탑승 처리 API 개발'},
            {content: '효과1: 현장 티켓 발권을 통해 앱 사용이 어려운 분들도 쉽게 이용 가능하도록 하여 고객 만족도 제고'},
            {content: '효과2: 탑승 이력을 통해 공공기관 데이터 통계 자료 확보'}
          ]
        },
        {
          content: '[관리자 기능] 데이터 기반 운영 관리 페이지 고도화',
          weight: 'MEDIUM',
          descriptions: [
            {content: '기능: 결제 완료 시 알림톡 자동 발송, 실시간 탑승 현황 대시보드 및 상세 이력 추적 기능 개발'},
            {content: '운영: 실시간 결제 목록과 실제 탑승 데이터를 대조하여 매출 정합성을 확보하고 현장 운영 이슈에 즉각 대응'}
          ]
        }
      ],
    },
    {
      title: '인천 MICE뷰로 시스템 운영 및 안정화',
      startedAt: '2024-04',
      endedAt: '2025-10',
      where: '인천 지역 내 컨벤션, 전시, 관광 정보를 통합 제공하고 행사 유치를 지원하는 포털 사이트 - 체인팜 주식회사',
      descriptions: [
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java 1.8, Spring Boot, JSP, MyBatis, MariaDB, SVN'}
          ]
        },
        {
          content:'[장애 정규화] 기존 미결제 오류 50여 건 전수 분석 및 해결',
          weight: 'MEDIUM',
          descriptions: [
            {content: '상황: 메인 담당자 배정 당시 시스템 내 산재해 있던 100~150여 개의 잔여 오류로 인해 서비스 안정성 저하'},
            {content: '해결1: Legacy 코드 분석을 통해 오류의 근본 원인을 파악하고, 우선순위에 따른 집중 디버깅 수행(3개월 내 대부분 조치)'},
            {content: '해결2: 매월 시스템 정기점검을 시행하여, 시스템 안정화 진행'},
            {content: '성과: 유지보수 4개월 차 이후 "신규 장애 발생 0건" 달성 및 시스템 가용성 극대화'}
          ]
        },
        {
          content: '[품질 관리] 공공기관 웹 접근성(WA) 심사 대응 및 통과',
          weight: 'MEDIUM',
          descriptions: [
            {content: '내용: 장애인 및 고령자 등 정보 취약계층의 이용 편의를 위한 시각/청각/기술적 지침 준수'},
            {content: '해결: 시멘틱 태그 보완, 키보드 접근성 개선, 대체 텍스트 최적화 등 프론트엔드 표준화 작업 수행'},
            {content: '성과: 국가 공인 웹 접근성 품질 인증 획득으로 서비스의 공신력 및 사회적 가치 제고'}
          ]
        },
        {
          content: '[운영 고도화] 실시간 긴급 장애 대응 및 고객 커뮤니케이션',
          weight: 'MEDIUM',
          descriptions: [
            {content: '내용: 실서버 모니터링 중 발생하는 긴급 장애에 대한 실시간 트러블슈팅 및 핫픽스(Hotfix) 배포'},
            {content: '역량: 발주처 및 운영 담당자와의 긴밀한 소통을 통해 요구사항을 정확히 기술 명세화하고, 이를 바탕으로 기능 개선안 제안 및 반영'}
          ]
        }
      ],
    },
    {
      title: '여주 캠핑장 전자서명 시스템',
      startedAt: '2024-10',
      endedAt: '2024-11',
      where: '체인팜 주식회사',
      descriptions: [
        {
          content: '대상 시설',
          weight: 'MEDIUM',
          descriptions: [
            {content: '금은모래, 강천섬, 대신(이포보) 캠핑장'}
          ]
        },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java 1.8, Spring Boot, JSP, MyBatis, MariaDB, SVN, Vue.js'}
          ]
        },
        {
          content: '[프로세스 혁신] 입실 확인 및 물품 지급 절차의 디지털화(Paperless)',
          weight: 'MEDIUM',
          descriptions: [
            {content: '상황: 입실 시 제공되는 지역 상품권 및 종량제 봉투 수령 확인을 종이 서류로 관리하던 아날로그 방식의 번거로움 존재'},
            {content: '해결: 관리자 페이지에서 버튼 클릭 시 현장 거치형 태블릿으로 서명 요청을 전송하고, 전자서명 데이터를 실시간으로 DB화하는 프로세스 구축'},
            {content: '효과: 현장 대기 시간을 단축하고, 종이 서류 분실 위험을 제거하여 물품 지급 데이터의 투명성 확보'}
          ]
        },
        {
          content: '[시스템 연동] 실시간 Push 기반 태블릿-백엔드 인터페이스 개발',
          weight: 'MEDIUM',
          descriptions: [
            {content: '내용: 관리자 페이지의 서명 요청 명령을 태블릿 단말로 전달하고, 태블릿에서 입력된 서명 이미지(Base64)와 지급 정보를 매칭하여 저장하는 API 개발'},
            {content: '검증: 네트워크 불안정 시에도 서명 데이터가 누락되지 않도록 트랜잭션 관리 및 예외 처리 로직 적용'}
          ]
        },
        {
          content: '[데이터 관리] 지급 물품별 통합 관리 및 조회 기능 구현',
          weight: 'MEDIUM',
          descriptions: [
            {content: '기능: 상품권 지급 목록, 종량제 봉투 지급 현황, 사용자 서명 정보를 관리자가 한눈에 확인할 수 있는 통합 대시보드 API 개발'},
            {content: '운영: 지급 이력에 대한 통계 데이터를 추출하여 지자체의 예산 집행 증빙 자료로 활용 가능하도록 지원'}
          ]
        }
      ],
    }
  ],
};

export default project;
