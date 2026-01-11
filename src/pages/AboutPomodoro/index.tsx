import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
  useEffect(() => {
    document.title = "Learn about pomodoro technique - Chronos";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by{" "}
            <strong>Francesco Cirillo</strong>, which consists of dividing work
            into time blocks (the famous "Pomodoros") interspersed with breaks.
            The goal is to maintain total focus for a short period and ensure
            breaks to avoid mental fatigue.
          </p>

          <img src="https://placehold.co/1920x1080" alt="" />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Define a task</strong> that you want to do.
            </li>
            <li>
              <strong>2. Work on that for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a 5 minutes short rest</strong>.
            </li>
            <li>
              <strong>4. After every 4 cycles, take a long rest</strong>
              (usually 15 to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> got a diferential 🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Custom timer</h3>
          <p>
            "You can configure the focus time, short break, and long break
            however you want! Just access the
            <RouterLink href="/settings">settings page</RouterLink> and adjust
            the minutes as you prefer."
          </p>

          <h3>🔁 Organized cycles in sequence</h3>
          <p>
            With each completed cycle, a new task is automatically added to your
            history, and the app already suggests the next cycle (focus or
            break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              Odd <strong>cycles</strong>: Work (focus).
            </li>
            <li>
              Even <strong>cycles</strong>: Short rest.
            </li>
            <li>
              Cycle <strong>8</strong>: Special long rest, to reset the cycle.
            </li>
          </ul>

          <h3>🍅 Cycles visualization</h3>
          <p>
            Just below the timer, you'll see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short rest.</li>
            <li>🔵 Blue: Long rest (show after 8 cycles).</li>
          </ul>

          <p>
            This way, you always know which part of the process you're in and
            what comes next. No need to write it down on paper or keep
            calculating in your head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed tasks and cycles are saved in the
            <RouterLink href="/history">history</RouterLink>, with status as
            completed or interrupted. This way, you can track your progress over
            time.
          </p>

          <h2>Why Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus with clarity.</li>
            <li>✅ Work and rest in the right measure.</li>
            <li>✅ Customize your own cycles and times.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            "<strong>Ready to focus?</strong> Let's go
            <RouterLink href="/">back to the home page</RouterLink> and start
            your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
