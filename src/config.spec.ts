import { Ainsley, validate, generate, minify } from 'ainsley'
import { parse } from 'css-tree'
import { config, options } from './config'

describe('config tests', () => {
  test('generates without throwing', () => {
    let results = ''
    const gen = () => {
      results = generate(config, options)
    }
    expect(gen).not.toThrow()
    expect(results).not.toBe('')
  })

  // not applicable if not including some co-dependent options
  test('no invalid css nodes when parsed with associated options', () => {
    expect(getErrors(generate(config, options))).toEqual([])
  })

  // not applicable if certain options are required to make it work
  // note that removing this check makes it break on unexpected class name formats
  test('no invalid css nodes when parsed with default options', () => {
    expect(getErrors(generate(config))).toEqual([])
  })

  // checks the structure of the config itself
  test('is valid according to validate', () => {
    expect(validate(config)).toEqual([])
  })

  // variables without modifiers makes your config less flexible
  test('no variables without modifiers', () => {
    expect(getUnmoddedVariables(config)).toEqual([])
  })

  // minify succeeds
  test('minifies successfully', () => {
    expect(() => minify(config)).not.toThrow()
  })
})

const getErrors = (css: string): string[] => {
  const invalid = [] as string[]

  try {
    parse(css, {
      positions: true,
      onParseError: (e, node) => {
        let message = e.message
        if ('value' in node) message += `: ${node.value}`

        if (invalid.length < 10) {
          invalid.push(message)
        } else if (invalid.length === 10) {
          invalid.push('...')
        }
      }
    })
  } catch (e) {
    invalid.push(e.message)
  }

  return invalid
}

const getUnmoddedVariables = (config: Ainsley): string[] => {
  const unmodded = [] as string[]

  const toCheck = [config]
  while (toCheck.length > 0) {
    const config = toCheck[toCheck.length - 1]

    if (config.variables !== null && typeof config.variables === 'object') {
      for (const variable of Object.keys(config.variables)) {
        if (
          variable.length === 0 ||
          !(variable[0].startsWith('+') || variable[0].startsWith('?'))
        ) {
          if (length > 10) {
            unmodded.push('...')
            return unmodded
          } else {
            unmodded.push(variable)
          }
        }
      }
    }

    toCheck.pop()

    if (Array.isArray(config.children)) {
      toCheck.push(
        ...(config.children.filter(
          (child) =>
            !Array.isArray(child) && child !== null && typeof child === 'object'
        ) as Ainsley[])
      )
    }
  }

  return unmodded
}
