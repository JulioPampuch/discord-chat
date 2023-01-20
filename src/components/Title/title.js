import appConfig from "../../../config.json"

const Title = (props) => {
  const Tag = props.tag || 'h1'
  return (
    <>
        <Tag>{props.children}</Tag>

      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary['050']};
        }
        h1 {
          font-size: 24px;
        }
        h2 {
          font-size: 14px;
          margin-top: 3px;
        }
      `}</style>
    </>
  )
}

export default Title