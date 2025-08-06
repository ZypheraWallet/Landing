import { CheckIcon } from "lucide-react"

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const items = [
  {
    id: 1,
    date: "3 Августа, 2025",
    title: "Начало проекта",
    description:
      "Выбор названия, структурирование, выбор стека технологий для разработки и т.д",
  },
  {
    id: 2,
    date: "4 Августа, 2025",
    title: "Инициализация",
    description:
      "Разбор дизайна, создание организации, оформление",
  },
  {
    id: 3,
    date: "5 Августа, 2024",
    title: "Разработка Dev page",
    description:
      "Разработка этой страницы для отслеживания изменений проекта",
  },
  {
    id: 4,
    title: "Компоненты интерфейса",
    description:
      "Создание и настройка собственных компонентов UI на базе shadcn/ui, включая кнопки, карточки, модальные окна и т.д.",
  },
  {
    id: 5,
    title: "Разработка лендинга",
    description:
      "Создание информативной и визуально привлекательной landing-страницы с использованием новой палитры и иконок",
  },
  {
    id: 6,
    title: "Структурирование логики кошелька",
    description:
      "Проектирование архитектуры кошелька, описание пользовательских потоков и начальная реализация основных модулей",
  },
  {
    id: 7,
    title: "Создание базовых API",
    description:
      "Настройка сервера на tRPC/Express, реализация базовых функций: получение баланса, транзакции, регистрация и т.д.",
  },
  {
    id: 8,
    title: "Фронтенд кошелька",
    description:
      "Разработка главной страницы пользовательского интерфейса кошелька с базовой логикой отображения данных",
  },
]

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
              <CheckIcon
                className="group-not-data-completed/timeline-item:hidden"
                size={16}
              />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
