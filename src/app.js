import React from 'react'
import { Presentation } from '@saitonakamura/presa'
import defaultTheme from '@saitonakamura/presa/lib/theme'
import * as Slides from './slides'
import { colors } from './colors'

const theme = { ...defaultTheme, primaryColor: colors.purple }

export const App = () => (
  <Presentation name="Иван Тулуп: асинхронщина в JS" theme={theme}>
    <Slides.TitleSlide name="Иван Тулуп: асинхронщина в JS" />
    <Slides.AboutMeSlide name="Обо мне" />

    <Slides.HaroldMemeSlide name="Кандидатура для Ивана Тулупа" />
    <Slides.DevIvanSlide name="Иван Тулуп и его карты" />
    <Slides.InfractionSlide name="Факты об инфаркте" />
    <Slides.SystemicCirculationSlide name="Большой круг кровообращения" />
    <Slides.IOBoundCpuBoundSlide name="I/O bound vs CPU bound" />
    <Slides.BrowsersEventLoopDiagramSlide
      name="Event Loop в браузере: упрощенная версия"
      task
      render
    />
    <Slides.ArithmiaAndTrombSlide name="Аритмия и тромб" />
    <Slides.RipSlide name="Вот и помер Дед Иван" />
    <Slides.BrowsersEventLoopDiagramSlide
      name="Event Loop в браузере: упрощенная версия"
      task
      render
    />
    <Slides.LoupeDemoSlide name="Демо Филипа Робертса: loupe" />
    <Slides.StackSlide name="Стек" />
    <Slides.BrowserPrioritiesSlide name="Приоритеты браузеров и очереди задач" />
    <Slides.AsynCycleBrowsersSlide name="Асинхронный цикл на таймауте" />
    <Slides.BrowsersEventLoopDiagramSlide
      name="Event Loop в браузере: requestAnimationFrame"
      task
      render
      raf={false}
    />
    <Slides.CpuBoundSolutionsSlide name="Способы решение долгой cpu-bound операции" />
    <Slides.TasksSummarySlide name="Итоги по таскам" />

    <Slides.TerminatorSantaSlide name="Терминатор-Санта: маскот Event Loop в Node.js" />
    <Slides.NodeEventLoopSlide name="Event Loop в Node.js" />
    <Slides.LibuvSlide name="Libuv" />
    <Slides.TimersPhaseSlide name="Фаза таймеров" />
    <Slides.PendingCallbacksPhaseSlide name="Фаза I/O коллбэков" />
    <Slides.NothingToDoHereSlide name="Фаза idle/prepare" />
    <Slides.PollPhaseSlide name="Фаза poll" />
    <Slides.CheckPhaseSlide name="Фаза check" />
    <Slides.ClosePhaseSlide name="Фаза close callbacks" />
    <Slides.NodeAsyncCycleWrongSlide name="Node: неверный асинхронный цикл" />
    <Slides.NodeAsyncCycleRightSlide name="Node: рекурсивный асинхронный цикл" />
    <Slides.TasksSummaryNodeSlide name="Итоги по таскам в Node.js" />

    <Slides.MicroTasksTitleSlide name="Микротаски: малый круг кровообращения" />
    <Slides.EventLoopWhatwgSlide name="Event Loop версия whatwg" />
    <Slides.BrowsersEventLoopDiagramSlide
      name="Event Loop в браузере: микротаски"
      task
      render
      raf
      microtask={false}
    />
    <Slides.MicrotaskSourcesSlide name="Источники микротасок" />
    <Slides.AllGonnaExecuteSlide name="Microtask checkpoint: выполняем всё" />
    <Slides.MicrotaskCheckpointSlide name="Как работает microtask checkpoint" />
    <Slides.MicrotaskStarveSlide name="Как заблокировать Event loop микротасками" />
    <Slides.MicrotaskStackExample1Slide name="Таски и микротаски: асинхронный пример" />
    <Slides.MicrotaskStackExampleSyncSlide name="Таски и микротаски: синхронный пример" />
    <Slides.MicrotaskStackAnimationsAsyncSlide name="Асинхронный пример: объяснение" />
    <Slides.MicrotaskStackAnimationsSyncSlide name="Синхронный пример: объяснение" />
    <Slides.MicrotasksModalExampleSlide name="Пример с модальным окном" />
    <Slides.MicrotasksSummarySlide name="Итоги по микротаскам" />

    <Slides.MicrotasksNodeSlide name="Микротаски в Node.js" />
    <Slides.ProcessNextTickSlide name="process.nextTick: пример" />
    <Slides.MicrotasksNodeSummarySlide name="Итоги по микротаскам в Node.js" />

    <Slides.AsyncAwaitSlide name="async / await" />

    <Slides.MaterialsSlide name="Материалы для изучения" />
    <Slides.LinksSlide name="Ссылка на презентацию" />
    <Slides.QuestionsSlide name="Вопросы?" />
  </Presentation>
)
