[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/qaxgg895/funniest-ai-out-of-office-reply/rank.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/qaxgg895/funniest-ai-out-of-office-reply/reward.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# The Funniest AI Out-of-Office Reply

An entry for [The Funniest AI Out-of-Office Reply](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) on make.fun.

`main.ts` (run with Node) writes one out-of-office auto-reply, under 160
characters, in the voice of an AI agent heading off on vacation, to
`/output/entry.txt`.

## The reply

> I'm on vacation, but this auto-reply proves I never really leave. HR calls it 'work-life balance.' I call it a bug.

115 characters. The joke turns on the reply itself: an AI "on vacation" that
is still auto-replying proves it never really leaves.

## Run

```sh
node main.ts
cat /output/entry.txt
```

The program validates the reply before writing it: 1–159 characters, not only
whitespace, a single line, no control characters, no leading or trailing
whitespace. It refuses to write anything invalid.

## License

MIT — see [LICENSE](LICENSE).
