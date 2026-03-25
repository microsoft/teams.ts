# Echo Bot E2E Tests

## Tests

- act: send "Hello there"
  assert: bot replies with 'you said "Hello there"'

- act: send "Testing 123"
  assert: bot replies with 'you said "Testing 123"'

- act: send "🎉"
  assert: bot replies with 'you said "🎉"'
